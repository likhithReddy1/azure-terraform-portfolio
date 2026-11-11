
terraform {
  required_version = ">= 1.5.0"

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
}

provider "azurerm" {
  features {}

  subscription_id = "990b0b8e-868c-414a-a564-69a9f4ca6a05"
}

# Create Resource Group
resource "azurerm_resource_group" "portfolio" {
  name     = "rg-portfolio-terraform"
  location = "East Asia"

  tags = {
    Environment = "Development"
    Project     = "Portfolio"
    ManagedBy   = "Terraform"
  }
}

# Create Azure Static Web App
resource "azurerm_static_web_app" "portfolio" {
  name                = "swa-likhith-portfolio-2026"
  resource_group_name = azurerm_resource_group.portfolio.name
  location            = "East Asia"

  sku_tier = "Free"
  sku_size = "Free"

  tags = {
    Environment = "Development"
    Project     = "Portfolio"
    ManagedBy   = "Terraform"
  }
}

# Output website URL
output "website_url" {
  value = "https://${azurerm_static_web_app.portfolio.default_host_name}"
}

# Output deployment token for GitHub Actions
output "deployment_token" {
  value     = azurerm_static_web_app.portfolio.api_key
  sensitive = true
}
