
import Filter from "@/components/filter"

export default async function Layout({ children }) {
    return (
        <div className="relative flex h-[calc(110vh_-_theme(spacing.16))] overflow-hidden bg-gradient-to-t from-[#030303] to-[#363636]">
            <Filter />
            <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
                {children}
            </div>
        </div>
    )
}