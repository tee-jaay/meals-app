// app.js
function App() {
    const [storeState, setStoreState] = React.useState(store.getState());

    React.useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setStoreState(store.getState());
        });
        // Fetch categories using Axios
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                store.dispatch(setCategories(response.data.categories));
            })
            .catch(error => {
                console.error('Error fetching categpries:', error);
            });

        return unsubscribe;
    }, []);

    if (storeState.isFetching) return (
        <Loader />
    );

    return (
        <div className="container">
            <h1 className="mt-4 text-center">Meal Categories</h1>
            <div className="row">
                {storeState.categories.map(category => (
                    <CategoryItem key={category.idCategory} category={category} />
                ))}
            </div>
        </div>
    );
}

// Render the React App component
ReactDOM.render(
    <App />,
    document.getElementById('root')
);