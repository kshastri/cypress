export const RUNNER_ID = 'unified-runner'

export const REPORTER_ID = 'unified-reporter'

function getElementById (id: string) {
  const el = document.querySelector<HTMLElement>(`#${id}`)

  if (!el) {
    throw Error(`Expected element with #${id} but did not find it.`)
  }

  return el
}

export function getRunnerElement () {
  return getElementById(RUNNER_ID)
}

export function getReporterElement () {
  return getElementById(REPORTER_ID)
}
