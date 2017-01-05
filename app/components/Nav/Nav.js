import styled from 'styled-components';

const Nav = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.bgColor || 'red'};
`;


// DefaultProps behavior is currently broken, fixed next release:
// https://github.com/styled-components/styled-components/pull/345

// Nav.defaultProps = {
//   theme: {
//     bgColor: 'red'
//   }
// };

export default Nav;
