import React, { useState } from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";

const Courses = () => {
  const { courses } = CourseData();
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  // Filter courses by category
  const categories = [...new Set(courses.map((course) => course.category))];

  // Sort courses by popular purchases (descending order)
  const popularCourses = [...courses].sort((a, b) => b.purchases - a.purchases).slice(0, 5);

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="courses">
      <h2>Available Courses</h2>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
        />
      </div>

      {/* Display filtered courses if any */}
      {filteredCourses.length > 0 && (
        <div className="filtered-courses">
          <h3>Search Results</h3>
          <div className="course-container">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      )}

      {/* Popular Courses Section */}
      <div className="popular-courses">
        <h3>Popular Courses</h3>
        <div className="course-container">
          {popularCourses.length > 0 ? (
            popularCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <p>No popular courses yet!</p>
          )}
        </div>
      </div>

      {/* Categories Section */}
      <div className="course-categories">
        {categories.map((category, index) => (
          <div key={index} className="category-section">
            <h3>{category}</h3>
            <div className="course-container">
              {/* Filter the courses that belong to the current category */}
              {filteredCourses
                .filter((course) => course.category === category)
                .map((course) => (
                  <CourseCard key={course._id} course={course} />
                ))}
              {/* If no filtered courses match, still show the category with no courses */}
              {filteredCourses.filter((course) => course.category === category).length === 0 && (
                <p>No filtered courses in this category!</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
