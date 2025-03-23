'use client'
import { useState } from 'react'
import { ArtworkFilterData } from '../../lib/definitions'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon, PlusIcon, MinusIcon } from '@heroicons/react/20/solid'

// function classNames(...classes: string[]) {
//     return classes.filter(Boolean).join(' ')
// }

const checkboxIcon = <svg
    fill="none"
    viewBox="0 0 14 14"
    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
>
    <path
        d="M3 8L6 11L11 3.5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-0 group-has-checked:opacity-100"
    />
    <path
        d="M3 7H11"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-0 group-has-indeterminate:opacity-100"
    />
</svg>

export type ArtworkFilterProps = {
    filterData: ArtworkFilterData
    /**
     * Optional callback that receives the current state of selected filters.
     * The object keys match the filter categories, and the values are arrays of selected options.
     */
    onFilterChange?: (selectedFilters: { [key: string]: string[] }) => void
}

const Filter = ({ filterData, onFilterChange }: ArtworkFilterProps) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({
        artist: [],
        color: [],
        place_of_origin: [],
        artwork_type: [],
    })

    // Build filter sections from passed data
    const filters = [
        {
            id: 'artist',
            name: 'Artist',
            options: filterData.artists.map((artist) => ({ value: artist, label: artist })),
        },
        {
            id: 'color',
            name: 'Color',
            options: filterData.colors.map((color) => ({ value: color, label: color })),
        },
        {
            id: 'place_of_origin',
            name: 'Place of Origin',
            options: filterData.placesOfOrigin.map((place) => ({ value: place, label: place })),
        },
        {
            id: 'artwork_type',
            name: 'Artwork Type',
            options: filterData.artworkTypes.map((type) => ({ value: type, label: type })),
        },
    ]

    // Toggle filter option selection
    const handleCheckboxChange = (filterId: string, value: string) => {
        setSelectedFilters((prev) => {
            const prevSelected = prev[filterId] || []
            const newSelected = prevSelected.includes(value)
                ? prevSelected.filter((v) => v !== value)
                : [...prevSelected, value]
            const updated = { ...prev, [filterId]: newSelected }
            if (onFilterChange) onFilterChange(updated)
            return updated
        })
    }

    const isChecked = (filterId: string, value: string) => {
        return selectedFilters[filterId]?.includes(value)
    }

    return (
        <div className="bg-white">
            {/* Mobile filter dialog */}
            <Dialog open={mobileFiltersOpen} onClose={setMobileFiltersOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop className="fixed inset-0 bg-black/25" />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative ml-auto flex max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                        <div className="flex items-center justify-between px-4">
                            <h5 className="text-lg font-medium text-gray-900">Filters</h5>
                            <button
                                type="button"
                                onClick={() => setMobileFiltersOpen(false)}
                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                        <form className="mt-4 border-t border-gray-200">
                            {filters.map((section) => (
                                <Disclosure key={section.id} as="div" className="border-t border-gray-200 px-4 py-6">
                                    <h5 className="-mx-2 -my-3 flow-root">
                                        <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900">{section.name}</span>
                                            <span className="ml-6 flex items-center">
                                                <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-open:hidden" />
                                                <MinusIcon aria-hidden="true" className="h-5 w-5 group-data-open:block hidden" />
                                            </span>
                                        </DisclosureButton>
                                    </h5>
                                    <DisclosurePanel className="pt-6">
                                        <div className="space-y-6">
                                            {section.options.map((option) => (
                                                <div key={option.value} className="flex gap-3 items-center">
                                                    <div className="flex h-4 items-center justify-center">
                                                        <div className="group grid size-4 grid-cols-1">
                                                            <input
                                                                type="checkbox"
                                                                id={`mobile-${section.id}-${option.value}`}
                                                                name={`${section.id}[]`}
                                                                value={option.value}
                                                                checked={isChecked(section.id, option.value)}
                                                                onChange={() => handleCheckboxChange(section.id, option.value)}
                                                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-amber-600 checked:bg-amber-600 indeterminate:border-amber-600 indeterminate:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                            />
                                                            {checkboxIcon}
                                                        </div>
                                                    </div>
                                                    <label htmlFor={`mobile-${section.id}-${option.value}`} className="text-gray-500">
                                                        {option.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </DisclosurePanel>
                                </Disclosure>
                            ))}
                        </form>
                    </DialogPanel>
                </div>
            </Dialog>


            <div className="flex items-baseline justify-between border-gray-200 pt-24 pb-6">
                {/* Mobile filter button */}
                <div className="flex items-center lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileFiltersOpen(true)}
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                        <span className="sr-only">Filters</span>
                        <FunnelIcon aria-hidden="true" className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:min-w-80">
                {/* Desktop Filters */}
                <form className="hidden lg:block">
                    {filters.map((section) => (
                        <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                            <h5 className="-my-3 flow-root">
                                <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">{section.name}</span>
                                    <span className="ml-6 flex items-center">
                                        <PlusIcon aria-hidden="true" className="h-5 w-5 group-data-open:hidden" />
                                        <MinusIcon aria-hidden="true" className="h-5 w-5 group-data-open:block hidden" />
                                    </span>
                                </DisclosureButton>
                            </h5>
                            <DisclosurePanel className="pt-6">
                                <div className="space-y-4">
                                    {section.options.map((option) => (
                                        <div key={option.value} className="flex gap-3 items-center">
                                            <div className="flex h-6 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input
                                                        type="checkbox"
                                                        id={`desktop-${section.id}-${option.value}`}
                                                        name={`${section.id}[]`}
                                                        value={option.value}
                                                        checked={isChecked(section.id, option.value)}
                                                        onChange={() => handleCheckboxChange(section.id, option.value)}
                                                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-amber-600 checked:bg-amber-600 indeterminate:border-amber-600 indeterminate:bg-amber-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                                                    />
                                                    {checkboxIcon}
                                                </div>
                                            </div>
                                            <label htmlFor={`desktop-${section.id}-${option.value}`} className="text-sm text-gray-600">
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </DisclosurePanel>
                        </Disclosure>
                    ))}
                </form>


            </div>
        </div>
    )
}

export default Filter;