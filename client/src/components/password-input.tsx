'use client';

import { useState } from 'react';

import { Input, InputProps } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = (props: InputProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex select-none">
      <Input className="pr-9" type={!show ? 'password' : 'text'} {...props} />
      <div
        onClick={() => setShow((prevState) => !prevState)}
        className="z-1 absolute right-2 self-center rounded-full p-1 hover:cursor-pointer hover:bg-accent"
      >
        {!show ? <Eye size={16} /> : <EyeOff size={16} />}
      </div>
    </div>
  );
};

export default PasswordInput;
