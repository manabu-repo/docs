import { useObjectFilter } from '../hooks/useObjectFilter'

const obj = {
  akashi: 24,
  asuka: 23,
  shiori: 20,
}

const res = useObjectFilter(obj, a => a <= 20)
console.log('res: ', res)
