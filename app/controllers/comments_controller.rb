class CommentsController < ApplicationController
  http_basic_authenticate_with name: "julianne", password: "lobster", only: :destroy
  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)
    if @comment.errors.any?
      render "articles/show"
    else
      redirect_to article_path(@article)
    end
  end
  
  def destroy
    @article = Article.find(params[:article_id])
    @comment = @article.comments.find(params[:id])
    @comment.destroy
    redirect_to article_path(@article)
  end
  
  private
  def comment_params
    params.require(:comment).permit(:commenter, :body)
  end
end
