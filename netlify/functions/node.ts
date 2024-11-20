import {version} from 'node:process'

export default function() => new Response(version)
