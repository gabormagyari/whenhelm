#!/bin/env node

const HelmApiClient = require('helm-api-client').HelmApiClient

const options = require('yargs')
  .scriptName('whenhelm')
  .usage('$0 <cmd> [args]')
  .command(
    'fetch [email]',
    'fetch queue positions',
    {
      email: {
        alias: 'e',
        demandOption: true,
        type: 'string',
        describe: 'the email that was used to join the list',
      },
    },
    async function (argv) {
      const client = HelmApiClient()
      const positions = await client.getPositions(argv.email)
      positions.map((position) =>
        console.log(`${position.watch}: ${position.position}`)
      )
    }
  )
  .help(true).argv
