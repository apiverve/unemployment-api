from setuptools import setup, find_packages

setup(
    name='apiverve_unemploymentrate',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Unemployment Rate looks up labor statistics by two- or three-letter ISO country code. It returns the country name, reporting year, and record count, with paid plans adding historical annual rates.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/unemployment?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
