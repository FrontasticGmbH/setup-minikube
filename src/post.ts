import {savePostActionCaches} from './cache'
import {info} from '@actions/core'

// Main function for post action
async function run(): Promise<void> {
  try {
    info('Running post-action to save Minikube image cache')
    await savePostActionCaches()
  } catch (error) {
    // Don't fail the workflow if the post action fails
    if (error instanceof Error) {
      info(`Post-action warning: ${error.message}`)
    } else {
      info(`Post-action warning: ${error}`)
    }
  }
}

// Run the post action
run()
