class CategoriesController < ApplicationController
    before_action :set_category, only:[:show]
    ## ssr of a react component
    def app
     render component: 'App'
    end

    def index
      render json: Category.all
    end

    def show
       render json: {category: @category, cards:@category.cards}
    end

    private

    def set_category
        @category = Category.find(params[:id])
    end
end
