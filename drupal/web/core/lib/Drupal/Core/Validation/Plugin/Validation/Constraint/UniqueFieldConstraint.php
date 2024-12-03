<?php

namespace Drupal\Core\Validation\Plugin\Validation\Constraint;

use Symfony\Component\Validator\Constraint;

/**
 * Checks if an entity field has a unique value.
 *
 * @Constraint(
 *   id = "UniqueField",
 *   label = @Translation("Unique field constraint", context = "Validation"),
 * )
 */
class UniqueFieldConstraint extends Constraint {

  public $message = 'A @entity_type with @field_name %value already exists.';

  /**
   * This constraint is case-insensitive by default.
   *
   * For example "FOO" and "foo" would be considered as equivalent, and
   * validation of the constraint would fail.
   *
   * @var bool
   */
  public $caseSensitive = FALSE;

  /**
   * Returns the name of the class that validates this constraint.
   *
   * @return string
   */
  public function validatedBy() {
    return '\Drupal\Core\Validation\Plugin\Validation\Constraint\UniqueFieldValueValidator';
  }

}