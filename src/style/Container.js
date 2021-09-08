import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.fluid ? '100%' : '78%'};
    margin: ${props => props.fluid ? '' : 'auto'};
`