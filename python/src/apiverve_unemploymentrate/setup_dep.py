from setuptools import setup, find_packages

setup(
    name='apiverve_unemploymentrate',
    version='1.1.14',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Unemployment Rate is a tool for retrieving unemployment statistics by country. It returns the unemployment rate as a percentage of the total labor force, with data available for over 200 countries from 1991 to present.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/unemployment?utm_source=pypi&utm_medium=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
