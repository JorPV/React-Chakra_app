import { Button } from '@chakra-ui/react'
// import './Button.css';

export const ChangeButton = ({ clickFn, ...props }) => (
<Button variant='outline' bg='white' _hover={{ bg: '#fff', borderColor:'darkgoldenrod'}} w={200} h={70} mt={8} onClick={clickFn} {...props}>
    {...props.children}
</Button>
);