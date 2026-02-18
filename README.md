# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




<div className="bg-white border-b border-gray-200 sticky top-20 z-40 ">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center ">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => category.subcategories.length > 0 && handleMouseEnter(category.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-4 whitespace-nowrap font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'text-[#2D7F88] border-b-2 border-[#2D7F88]'
                      : 'text-[#0F2E4D] hover:text-[#2D7F88]'
                  }`}
                >
                  {category.name}
                  {category.subcategories.length > 0 && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Mega Menu Dropdown */}
                {activeCategory === category.id && category.subcategories.length > 0 && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-2xl border border-gray-200 rounded-lg mt-0 min-w-[300px] z-50 overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(category.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-4 grid grid-cols-1 gap-2">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.id}
                          to={`/products/${sub.slug}`}
                          className="px-4 py-2 text-[#0F2E4D] hover:bg-[#F7F9FB] hover:text-[#2D7F88] rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>