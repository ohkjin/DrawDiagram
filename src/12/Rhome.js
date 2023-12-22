import { Link, useNavigate} from 'react-router-dom'
import TailBlueButton from '../UI/TailBlueButton';
import { Option, Select } from '@material-tailwind/react';

export default function Rhome() {
  const navigator = useNavigate();
  return (
    <div className='grow justify-center items-end'>
      <div className='text-2xl'>Home</div>
      <div>
        <div className='mx-10'>Page1 이동</div>
        <ul>
          <li><Link to ='/page1/늑대'> 🐺</Link></li>
          <li><Link to ='/page1/여우'> 🦊</Link></li>
          <li><Link to ='/page1/쥐'> 🐭</Link></li>
        </ul>
      </div>
      <div className='flex'>
        <div className='mx-10'>Page 2 이동2</div>
        <div>
          <TailBlueButton caption={'늑대'} bColor={'orange'} handleClick={()=> navigator('/page2?item1=늑대&item2=여우')}/>
          <TailBlueButton caption={'여우'} bColor={'blue'} handleClick={()=> navigator('/page2?item1=여우&item2=쥐')}/>
          <TailBlueButton caption={'쥐'} bColor={'rose'} handleClick={()=> navigator('/page2?item1=쥐&item2=늑대')}/>
        </div>
      </div>
      <div className="w-80">
        <Select label="Select Version"
                animate={{
                  mount: { y: 10 },
                  unmount: { y: 25 },
                }}
        >
          <Option>Material Tailwind HTML</Option>
          <Option>Material Tailwind React</Option>
          <Option>Material Tailwind Vue</Option>
          <Option>Material Tailwind Angular</Option>
          <Option>Material Tailwind Svelte</Option>
        </Select>
    </div>
    </div>
  )
}
