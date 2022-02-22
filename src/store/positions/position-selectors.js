export const selectPositions = (state) => {

    if (state.filters.params.length === 0 && !state.filters.searchQuery) return state.positions;

    const filterByParams = state.positions.filter(pos => {
            const positionFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
            return state.filters.params.every( filter => positionFilters.includes(filter));
        }
    );

    if (state.filters.searchQuery === '') return filterByParams;

    const filteredByParamsAndSearchQuery = filterByParams.filter( pos => {
        const searchQuery = state.filters.searchQuery.toLowerCase();
        const infoRow = (pos.position + pos.company).toLowerCase();
        return infoRow.includes(searchQuery);
    });

    return filteredByParamsAndSearchQuery;

}
