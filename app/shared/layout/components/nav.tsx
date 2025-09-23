import { TypographyBase } from '@components/typography/typography-base'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@components/ui/navigation-menu'
import { RoutesEnum } from '@routes'
import { Link } from 'react-router'

interface MenuItem {
  title: string
  href?: string
  components?: MenuItem[]
  image?: boolean
}

const menuList: MenuItem[] = [
  {
    title: 'Institucional',
    href: '/docs/primitives/hover-card',
  },
  {
    title: 'Feiras',
    href: '/docs/primitives/hover-card',
  },
  {
    title: 'Produtos',
    image: true,
    components: [
      {
        title: 'Capas',
        href: '/docs/primitives/hover-card',
      },
      {
        title: 'Leques',
        href: '/docs/primitives/hover-card',
      },
      {
        title: 'Roupas',
        href: '/docs/primitives/hover-card',
      },
      {
        title: 'Toalhas',
        href: '/docs/primitives/hover-card',
      },
      {
        title: ' Todos os Produtos',
        href: RoutesEnum.PRODUCTS,
      },
    ],
  },
  {
    title: 'Artesãos',
    href: '/docs/primitives/hover-card',
  },
]

export function Nav() {
  return (
    <NavigationMenu
      viewport={false}
      className="justify-end flex flex-col h-full"
    >
      <NavigationMenuList>
        {menuList.map((e) => (
          <NavigationMenuItem key={e.title}>
            {e.href ? (
              <NavigationMenuLink asChild>
                <Link to={e.href}>
                  <TypographyBase className="font-medium">
                    {e.title}
                  </TypographyBase>
                </Link>
              </NavigationMenuLink>
            ) : (
              <>
                <NavigationMenuTrigger className="font-medium">
                  {e.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-row">
                  <ul className="grid w-[400px] min-h-60 gap-8 p-3">
                    <li>
                      {e.components?.map((item) => (
                        <NavigationMenuLink asChild className="h-9">
                          <Link to={item.href!}>
                            <TypographyBase className="font-medium">
                              {item.title}
                            </TypographyBase>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </li>
                  </ul>
                  {e.image && (
                    <div className="bg-[url(/app/shared/assets/images/menu-decoration.png)] bg-no-repeat bg-cover bg-center w-40" />
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
