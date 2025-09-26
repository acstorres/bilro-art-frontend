import {
  Pagination as PaginationWrapper,
  PaginationContent,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrevious,
} from '@shared/components/ui/pagination'

export interface PagiantionProps {
  currentPage: number
  pages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  pages,
  onPageChange,
}: PagiantionProps) {
  const disablePrevious = () => currentPage === 1

  const disableNext = () => currentPage === pages

  const getPreviousPage = () => currentPage - 1

  const getNextPage = () => currentPage + 1

  return (
    <PaginationWrapper>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            previousButtonText="Anterior"
            aria-label="Ir para página anterior"
            disabled={disablePrevious()}
            onClick={() => onPageChange(getPreviousPage())}
          />
        </PaginationItem>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationButton onClick={() => onPageChange(getPreviousPage())}>
              {getPreviousPage()}
            </PaginationButton>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationButton className="font-semibold text-xl">
            {currentPage}
          </PaginationButton>
        </PaginationItem>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationButton onClick={() => onPageChange(getNextPage())}>
              {getNextPage()}
            </PaginationButton>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            nextButtonText="Próxima"
            aria-label="Ir para próxima página"
            disabled={disableNext()}
            onClick={() => onPageChange(getNextPage())}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationWrapper>
  )
}
