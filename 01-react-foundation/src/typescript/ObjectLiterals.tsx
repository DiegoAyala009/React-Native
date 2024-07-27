
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}


interface Address {
  country: string;
  houseNo: number
}


export const ObjectLiterals = () => {
    const person: Person = {
      age: 32,
      firstName: 'Diego',
      lastName: 'Ayala',
      isAlive: true,
      address: {
        country: 'Paraguay',
        houseNo: 123
      }
  };


  return (
    <>
        <h3>Objetos Literales</h3>
        <pre>
          { JSON.stringify( person, null, 2 ) }
        </pre>
    </>
  )
}
