import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function  NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return(
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput 
        id="task"
        list="task-suggestions" 
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        {...register('task')} 
      />

      <label htmlFor="task">Durante</label>
      <MinutesAmountInput 
        type="number" 
        id="minutesAmount"
        disabled={!!activeCycle}
        placeholder="00" 
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })} 
      />

      <span>minutos.</span>
    </FormContainer>
  )

}