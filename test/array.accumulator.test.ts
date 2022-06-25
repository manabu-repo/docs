import { useArrayAccumulator } from '../hooks/useArrayAccumulator'

const arr = [1, 2, 3]
const res = useArrayAccumulator(arr)
console.log('res', res)
