source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# React
gem 'react-rails', '~> 1.6.0'
#Haml
gem 'haml'
# Use jquery as the JavaScript library
gem 'jquery-rails'

# RefineryCMS
gem 'refinerycms', git: 'https://github.com/refinery/refinerycms', branch: 'master'
gem 'quiet_assets', group: :development
# Add support for searching inside Refinery's admin interface.
gem 'refinerycms-acts-as-indexed', ['~> 2.0', '>= 2.0.0']
# Add support for Refinery's custom fork of the visual editor WYMeditor.
gem 'refinerycms-wymeditor', ['~> 1.0', '>= 1.0.6']
# The default authentication adapter
gem 'refinerycms-authentication-devise', '~> 1.0'
# Refinery news
gem 'refinerycms-news', github: 'refinery/refinerycms-news', branch: 'master'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'

group :development, :test do
  gem 'pry'
  gem 'rspec-rails', '~> 3.0'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
end

group :production do
  # Refinery image from S3	
  gem 'fog'
  gem 'dragonfly-s3_data_store'
end

