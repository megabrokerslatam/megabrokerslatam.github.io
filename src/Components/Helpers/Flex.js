import styled  from 'styled-components'

const Flex1 = styled.span `
    flex: 1;
`
const Flex2 = styled.span `
    flex: 2;
`
const Flex3 = styled.span `
    flex: 3;
`
const Flex4 = styled.span `
    flex: 4;
`
const Flex5 = styled.span `
    flex: 5;
`
const Flex6 = styled.span `
    flex: 6;
`
const Row = styled.div `
    flex: 1;
    display: flex;
    flex-direction: row;
`
const RowBetween = styled(Row)`
    justify-content: space-between;
`
const RowAround = styled(Row)`
    justify-content: space-around;
`
const Column = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export { 
    Flex1, Flex2, Flex3, Flex4, Flex5, Flex6,
    Row, RowBetween, RowAround, 
    Column
};