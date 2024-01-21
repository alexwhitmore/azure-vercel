import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

export default function RepoCard({ repos }: { repos: string[] }) {
  return (
    <div className='flex justify-center my-10 px-4'>
      <Card className='w-full max-w-2xl'>
        <CardHeader>
          <CardTitle>Import Git Repository</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className='divide-y border rounded-md'>
            {repos &&
              repos.slice(0, 5).map((repo, i) => (
                <li key={i} className='flex justify-between items-center divide-y p-5'>
                  {repo}
                  <Button variant='default' size='sm'>
                    Import
                  </Button>
                </li>
              ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
