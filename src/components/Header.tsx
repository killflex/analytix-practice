
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
  

import { Menu } from "lucide-react"

import { navMenu } from "@/constants"

const Header = () => {
  return (
    <header className="h-16 grid grid-cols-1 items-center md:h-20 lg:h-24   ">
        <div className="container flex justify-between lg:grid lg:grid-cols-3">
            <Logo variant="icon"/>

            <NavigationMenu className="max-lg:hidden mx-auto">

                <NavigationMenuList>
                    {navMenu.map(({ href, label, submenu }, index) => (
                        <NavigationMenuItem key={index}>
                            {submenu ? (
                                <>
                                    <NavigationMenuTrigger>
                                        {label}
                                    </NavigationMenuTrigger>

                                    <NavigationMenuContent>
                                        <ul className="grid grid-cols-2 gap-3 p-2 w-[640px]">
                                            {submenu.map(({ href, icon, label, desc }, index) => (
                                                <li key={index}>
                                                    <NavigationMenuLink>
                                                        <a href={href} className="flex gap-3 select-none rounded-sm">
                                                            <div className="w-10 h-10 bg-foreground/10 rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center">{icon}</div>
                                                            <div>
                                                                <div className="text-sm leading-normal mb-1">{label}</div>
                                                                <p className="text-sm leading-normal text-muted-foreground">{desc}</p>
                                                            </div>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            ) : (
                            <NavigationMenuLink href={href} className={navigationMenuTriggerStyle()}>
                                {label}
                            </NavigationMenuLink>
                            )}
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center justify-end gap-2 max-lg:hidden">
                <Button variant='ghost'>Sign In</Button>
                <Button>Start Trial</Button>
            </div>

            <Popover>
                <PopoverTrigger className="lg:hidden">
                    <Button variant='outline' size='icon' >
                        <Menu />
                    </Button>
                </PopoverTrigger>

                <PopoverContent align="end" className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-x-0 border-b-0 rounded-lg overflow-hidden">
                    <MobileMenu navMenu={navMenu}/>
                </PopoverContent>
            </Popover>
        </div>
    </header>
  )
}

export default Header