import {version} from 'node:process'
console.log(version)
export default () => new Response(version)
