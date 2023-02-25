import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import { FormProvider, useForm } from 'react-hook-form';

import { 
  HomeContainer, 
  StartCountdownButton, 
  StopCountdownButton, 
} from "./styles";

import { NewCycleForm } from "./components/NewCycleForm";
import { Countdown } from "./components/Countdown";
import { CyclesContext } from "../../contexts/CyclesContext";

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle} = useContext(CyclesContext)

  const newCycleForm = useForm({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    }
  })

  const { handleSubmit, watch, reset} = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
       
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        { activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24}/>
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisable} type="submit">
            <Play size={24}/>
            Começar
          </StartCountdownButton>
        )}

      </form>
    </HomeContainer>
  );
}