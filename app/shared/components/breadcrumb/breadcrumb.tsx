import { NavLink } from 'react-router'
import { TypographyBase } from '@shared/components/typography'
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Breadcrumb as BreadcrumComponent,
} from '@shared/components/ui/breadcrumb'
import { RoutesEnum } from '@routes'

interface BreadcrumbRoute {
  route: RoutesEnum
  name: string
}

interface BreadcrumbProps {
  pages: BreadcrumbRoute[]
}

export default function Breadcrumb({ pages }: BreadcrumbProps) {
  const isLastPage = (page: BreadcrumbRoute) =>
    page.name === pages[pages.length - 1].name

  return (
    <BreadcrumComponent className="bg-background/96 fixed z-10 w-full h-12 content-center">
      <BreadcrumbList>
        {pages.map((page) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {page.route && (
                  <NavLink to={page.route}>
                    {({ isActive }) => (
                      <TypographyBase className={isActive ? 'font-medium' : ''}>
                        {page.name}
                      </TypographyBase>
                    )}
                  </NavLink>
                )}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {!isLastPage(page) && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </BreadcrumComponent>
  )
}
