'use client'
import { motion } from 'motion/react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'
import { routes } from '@/configs/routes'
import { cn } from '@/library/utils'

import {
  hideNavItemsVariant,
  mobileMenuVariant,
  fadeInVariant,
  liVariant,
  ulVariant,
} from '../configs/animations'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <motion.nav initial="closed" animate={open ? 'opened' : 'closed'}>
      <motion.div
        className="lg:hidden"
        onClick={() => setOpen(true)}
        variants={hideNavItemsVariant}
      >
        <Image
          src="/icons/burger-menu.png"
          alt="burger menu"
          className="w-7"
          height={14}
          width={22}
        />
      </motion.div>

      <motion.div
        className="fixed top-0 right-0 left-0 z-50 h-[50dvh] w-full bg-black/70 backdrop-blur-lg"
        variants={mobileMenuVariant}
      >
        <motion.button
          className={cn(
            buttonVariants(),
            'absolute top-4 right-3 size-8 rounded-[2px] bg-white/10 p-1',
          )}
          onClick={() => setOpen(false)}
          variants={fadeInVariant}
        >
          <Image
            src="/icons/close-icon.svg"
            className="size-full"
            alt="burger menu"
            height={64}
            width={64}
          />
        </motion.button>

        <motion.ul variants={ulVariant} className="px-3 pt-14 pb-6">
          {routes.map((route, index) => (
            <motion.li whileTap={{ scale: 0.95 }} key={index}>
              <motion.div variants={liVariant}>
                <Link
                  className="flex items-center justify-between gap-4 border-b-2 border-white p-3 text-xl text-white"
                  href={route.href}
                >
                  {route.name}

                  <Image
                    src="/icons/right-arrow.png"
                    alt="right-arrow"
                    className="w-3"
                    height={10}
                    width={10}
                  />
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.nav>
  )
}
