import { Button as CButton } from '@chakra-ui/react'
// import './Button.css';

export const Button = ({ clickFn, ...props }) => (
<CButton variant='outline' colorScheme='teal' bg='white' _hover={{ bg: '#fff', borderColor:'darkgoldenrod'}} w={'auto'} h={'50'} mt={8} onClick={clickFn} {...props}>
    {...props.children}
</CButton>
);