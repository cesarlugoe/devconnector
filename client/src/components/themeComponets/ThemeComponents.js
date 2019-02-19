import React from 'react'
import Button from './Button';
import ContainerExampleContainer from './Container';
import ListExampleIcon from './List';
import LoaderExampleText from './Loader';
import TableExamplePadded from './Table';
import DropdownExampleMultipleSelection from './Dropdown';
import RevealExampleMoveUp from './RevealCard';
import DividerExampleDivider from './Divider';
import FormExampleForm from './Form';
import LabelExampleRibbon from './GridwithLabel';

const ThemeComponents = () => {
   return(
      <div>
         <Button>Click Here</Button>
         <DividerExampleDivider />
         <ContainerExampleContainer />
         <DividerExampleDivider />
         <ListExampleIcon/>
         <DividerExampleDivider />
         <LoaderExampleText />
         <DividerExampleDivider />
         <TableExamplePadded/>
         <DividerExampleDivider />
         <div className="container ui ">
            <DropdownExampleMultipleSelection />
         </div>
         <DividerExampleDivider />
         <RevealExampleMoveUp />
         <DividerExampleDivider />
         <FormExampleForm />
         <DividerExampleDivider />
         <LabelExampleRibbon />

      </div>

   );
};

export default ThemeComponents;