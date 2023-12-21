export const viewKeys = {
  view: (projectRef: string | undefined, id: number | undefined) =>
    ['projects', projectRef, 'views', id] as const,
}
