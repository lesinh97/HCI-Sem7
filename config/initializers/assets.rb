Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.paths << Rails.root.join('node_modules')
Rails.application.config.assets.precompile += %w( jquery-2.2.4.min.js popper.min.js bootstrap.min.js plugins.js active.js )
Rails.application.config.assets.precompile += %w( style.css )
