

export const BasicTypes = () => {
    const name:string = 'Diego';
    const age:number = 32;
    const isActive:boolean = true;
    const powers:string[] = ['React','ReactNaative','Angular','Vue','Qwik'];

    powers.push('Visual');

  return (
    <>
        <h3>Tipos Básicos</h3>
            { name } { age } { isActive ? 'true': 'false' }
            <br />
            { powers.join(', ') }
    </>  
  )
}

