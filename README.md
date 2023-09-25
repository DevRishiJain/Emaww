# XML to Redis Exporter

This simple Java application allows you to export data from an XML file to a Redis database. It reads a specific XML file (`config.xml`), extracts data, and saves it to Redis keys according to predefined rules.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Build the Docker Image](#build-the-docker-image)
  - [Run the Application](#run-the-application)
- [Usage](#usage)
- [Unit Tests](#unit-tests)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker and Docker Compose installed on your machine.
- A valid `config.xml` file containing the data you want to export.

## Getting Started

To get started with this application, follow these steps:

### Build the Docker Image

1. Clone this repository to your local machine:


2. Navigate to the project directory:


3. Build the Docker image:


### Run the Application

After building the Docker image, you can run the application with the following command:


Replace `/path/to/config.xml` with the actual path to your XML file.

## Usage

- The application reads the XML file specified and exports data to Redis based on the following rules:

  - The "subdomains" key contains a JSON array of all subdomains found in the XML.
  - Keys of the format `cookie:%NAME%:%HOST%` contain the values of cookie elements in the XML.

- If you include the `-v` flag when running the application, it will print all keys saved to Redis.

## Unit Tests

We have included unit tests to ensure the correctness of the XML parsing and data export logic. You can run the tests with the following command:


## Contributing

Contributions are welcome! If you have any improvements or bug fixes, feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
