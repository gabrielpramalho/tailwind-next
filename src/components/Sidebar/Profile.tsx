/* eslint-disable @next/next/no-img-element */
import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/gabrielpramalho.png"
        alt="Foto de Perfil Gabriel"
        className="h-10 w-10 rounded-full"
      />

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Gabriel Ramalho
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          gpedroramalho@gmail.com
        </span>
      </div>

      <Button variant="ghost" type="button">
        <LogOut className="size-5" />
      </Button>
    </div>
  )
}
