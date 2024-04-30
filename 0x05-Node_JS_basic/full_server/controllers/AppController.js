/**
 * Contains the miscellaneous route handlers.
 * @author Perseverance Mutengera <https://github.com/Persemutengera>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
