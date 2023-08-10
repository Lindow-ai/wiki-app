import Search from "../../search/Search";

export function NavList() {

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <div className="relative flex w-full gap-2 md:w-max">
        <Search />
      </div>
    </ul>
  );
}
