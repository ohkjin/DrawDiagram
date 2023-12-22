import { useSearchParams } from "react-router-dom"

export default function Rpage2() {
  const [animal,setAnimal] = useSearchParams();
  //Accessible tools on console
  console.log(animal);
  console.log(animal.getAll('item1'));
  let a1 = animal.get('item1');
  let a2 = animal.get('item2');
  const emoji = {
    늑대:'🐺',
    여우:'🦊',
    쥐:'🐭',
  }
  return (
    <div>
      <div>Page 2</div>
      <div>
        {a1&&emoji[a1]}{a2&&emoji[a2]}
      </div>
    </div>
  )
}
