---
title: Enum tauri::Position
sidebar_label: enum.Position
custom_edit_url: null
---

  # Enum tauri::Position,

```rs
pub enum Position {
    Physical(PhysicalPosition<i32>),
    Logical(LogicalPosition<f64>),
}
```

Expand description

A position that’s either physical or logical.

## Variants

`Physical(PhysicalPosition<i32>)`

Physical position.

`Logical(LogicalPosition<f64>)`

Logical position.

## Trait Implementations

### impl [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

#### pub fn [clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)(&self) -> [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

Returns a copy of the value. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#tymethod.clone)

#### fn [clone_from](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)(&mut self, source: [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)Self)1.0.0[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/clone.rs.html#130 "goto source code")

Performs copy-assignment from `source`. [Read more](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html#method.clone_from)

### impl [Debug](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html "trait core::fmt::Debug") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

#### pub fn [fmt](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)(&self, f: &mut [Formatter](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Formatter.html "struct core::fmt::Formatter")&lt;'\_>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[()](https://doc.rust-lang.org/1.54.0/std/primitive.unit.html), [Error](https://doc.rust-lang.org/1.54.0/core/fmt/struct.Error.html "struct core::fmt::Error")>

Formats the value using the given formatter. [Read more](https://doc.rust-lang.org/1.54.0/core/fmt/trait.Debug.html#tymethod.fmt)

### impl&lt;'de> [Deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de> for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

#### pub fn [deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html#tymethod.deserialize)&lt;\_\_D>( \_\_deserializer: \_\_D ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;[Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position"), &lt;\_\_D as [Deserializer](https://docs.rs/serde/1.0.129/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de>>::[Error](https://docs.rs/serde/1.0.129/serde/de/trait.Deserializer.html#associatedtype.Error "type serde::de::Deserializer::Error")> where \_\_D: [Deserializer](https://docs.rs/serde/1.0.129/serde/de/trait.Deserializer.html "trait serde::de::Deserializer")&lt;'de>,

Deserialize this value from the given Serde deserializer. [Read more](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html#tymethod.deserialize)

### impl [PartialEq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html "trait core::cmp::PartialEq")&lt;[Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")> for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

#### pub fn [eq](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)(&self, other: &[Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

This method tests for `self` and `other` values to be equal, and is used by `==`. [Read more](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#tymethod.eq)

#### pub fn [ne](https://doc.rust-lang.org/1.54.0/core/cmp/trait.PartialEq.html#method.ne)(&self, other: &[Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")) -> [bool](https://doc.rust-lang.org/1.54.0/std/primitive.bool.html)

This method tests for `!=`.

### impl [Serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html "trait serde::ser::Serialize") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

#### pub fn [serialize](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html#tymethod.serialize)&lt;\_\_S>( &self, \_\_serializer: \_\_S ) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;&lt;\_\_S as [Serializer](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html "trait serde::ser::Serializer")>::[Ok](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html#associatedtype.Ok "type serde::ser::Serializer::Ok"), &lt;\_\_S as [Serializer](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html "trait serde::ser::Serializer")>::[Error](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html#associatedtype.Error "type serde::ser::Serializer::Error")> where \_\_S: [Serializer](https://docs.rs/serde/1.0.129/serde/ser/trait.Serializer.html "trait serde::ser::Serializer"),

Serialize this value into the given Serde serializer. [Read more](https://docs.rs/serde/1.0.129/serde/ser/trait.Serialize.html#tymethod.serialize)

### impl [Copy](https://doc.rust-lang.org/1.54.0/core/marker/trait.Copy.html "trait core::marker::Copy") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

### impl [StructuralPartialEq](https://doc.rust-lang.org/1.54.0/core/marker/trait.StructuralPartialEq.html "trait core::marker::StructuralPartialEq") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

## Auto Trait Implementations

### impl [RefUnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.RefUnwindSafe.html "trait std::panic::RefUnwindSafe") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

### impl [Send](https://doc.rust-lang.org/1.54.0/core/marker/trait.Send.html "trait core::marker::Send") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

### impl [Sync](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sync.html "trait core::marker::Sync") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

### impl [Unpin](https://doc.rust-lang.org/1.54.0/core/marker/trait.Unpin.html "trait core::marker::Unpin") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

### impl [UnwindSafe](https://doc.rust-lang.org/1.54.0/std/panic/trait.UnwindSafe.html "trait std::panic::UnwindSafe") for [Position](/docs/api/rust/tauri/enum.Position "enum tauri::Position")

## Blanket Implementations

### impl&lt;T> [Any](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html "trait core::any::Any") for T where T: 'static + ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#131-135 "goto source code")

#### pub fn [type_id](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)(&self) -> [TypeId](https://doc.rust-lang.org/1.54.0/core/any/struct.TypeId.html "struct core::any::TypeId")[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/any.rs.html#132 "goto source code")

Gets the `TypeId` of `self`. [Read more](https://doc.rust-lang.org/1.54.0/core/any/trait.Any.html#tymethod.type_id)

### impl&lt;T> [Borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html "trait core::borrow::Borrow")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#208-213 "goto source code")

#### pub fn [borrow](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)(&self) -> [&](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#210 "goto source code")

Immutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.Borrow.html#tymethod.borrow)

### impl&lt;T> [BorrowMut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html "trait core::borrow::BorrowMut")&lt;T> for T where T: ?[Sized](https://doc.rust-lang.org/1.54.0/core/marker/trait.Sized.html "trait core::marker::Sized"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#216-220 "goto source code")

#### pub fn [borrow_mut](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)(&mut self) -> [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/borrow.rs.html#217 "goto source code")

Mutably borrows from an owned value. [Read more](https://doc.rust-lang.org/1.54.0/core/borrow/trait.BorrowMut.html#tymethod.borrow_mut)

### impl&lt;'de, D, R> [CommandArg](/docs/api/rust/tauri/command/trait.CommandArg "trait tauri::command::CommandArg")&lt;'de, R> for D where R: [Runtime](/docs/api/rust/tauri/trait.Runtime "trait tauri::Runtime"), D: [Deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de>,[\[src\]](/docs/api/rust/tauri/../src/tauri/command.rs#51-56 "goto source code")

#### pub fn [from_command](/docs/api/rust/tauri/command/trait.CommandArg#tymethod.from_command)([CommandItem](/docs/api/rust/tauri/command/struct.CommandItem "struct tauri::command::CommandItem")&lt;'de, R>) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;D, [InvokeError](/docs/api/rust/tauri/struct.InvokeError "struct tauri::InvokeError")>[\[src\]](/docs/api/rust/tauri/../src/tauri/command.rs#52-55 "goto source code")

Derives an instance of `Self` from the [`CommandItem`](/docs/api/rust/tauri/command/struct.CommandItem "CommandItem"). [Read more](/docs/api/rust/tauri/command/trait.CommandArg#tymethod.from_command)

### impl&lt;T> [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T> for T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#544-548 "goto source code")

#### pub fn [from](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html#tymethod.from)(t: T) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#545 "goto source code")

Performs the conversion.

### impl&lt;T, U> [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;U> for T where U: [From](https://doc.rust-lang.org/1.54.0/core/convert/trait.From.html "trait core::convert::From")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#533-540 "goto source code")

#### pub fn [into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html#tymethod.into)(self) -> U[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#537 "goto source code")

Performs the conversion.

### impl&lt;T> [ToOwned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html "trait alloc::borrow::ToOwned") for T where T: [Clone](https://doc.rust-lang.org/1.54.0/core/clone/trait.Clone.html "trait core::clone::Clone"),[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#84-96 "goto source code")

#### type [Owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#associatedtype.Owned) = T

The resulting type after obtaining ownership.

#### pub fn [to_owned](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)(&self) -> T[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#89 "goto source code")

Creates owned data from borrowed data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#tymethod.to_owned)

#### pub fn [clone_into](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)(&self, target: [&mut](https://doc.rust-lang.org/1.54.0/std/primitive.reference.html)T)[\[src\]](https://doc.rust-lang.org/1.54.0/src/alloc/borrow.rs.html#93 "goto source code")

🔬 This is a nightly-only experimental API. (`toowned_clone_into`)

recently added

Uses borrowed data to replace owned data, usually by cloning. [Read more](https://doc.rust-lang.org/1.54.0/alloc/borrow/trait.ToOwned.html#method.clone_into)

### impl&lt;T, U> [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U> for T where U: [Into](https://doc.rust-lang.org/1.54.0/core/convert/trait.Into.html "trait core::convert::Into")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#581-590 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error) = [Infallible](https://doc.rust-lang.org/1.54.0/core/convert/enum.Infallible.html "enum core::convert::Infallible")

The type returned in the event of a conversion error.

#### pub fn [try_from](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#tymethod.try_from)(value: U) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;T, &lt;T as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;U>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#587 "goto source code")

Performs the conversion.

### impl&lt;T, U> [TryInto](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html "trait core::convert::TryInto")&lt;U> for T where U: [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>,[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#567-576 "goto source code")

#### type [Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#associatedtype.Error) = &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")

The type returned in the event of a conversion error.

#### pub fn [try_into](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryInto.html#tymethod.try_into)(self) -> [Result](https://doc.rust-lang.org/1.54.0/core/result/enum.Result.html "enum core::result::Result")&lt;U, &lt;U as [TryFrom](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html "trait core::convert::TryFrom")&lt;T>>::[Error](https://doc.rust-lang.org/1.54.0/core/convert/trait.TryFrom.html#associatedtype.Error "type core::convert::TryFrom::Error")>[\[src\]](https://doc.rust-lang.org/1.54.0/src/core/convert/mod.rs.html#573 "goto source code")

Performs the conversion.

### impl&lt;V, T> VZip&lt;V> for T where V: MultiLane&lt;T>,

#### pub fn [vzip](/docs/api/rust/tauri/about:blank#tymethod.vzip)(self) -> V

### impl&lt;T> [DeserializeOwned](https://docs.rs/serde/1.0.129/serde/de/trait.DeserializeOwned.html "trait serde::de::DeserializeOwned") for T where T: for&lt;'de> [Deserialize](https://docs.rs/serde/1.0.129/serde/de/trait.Deserialize.html "trait serde::de::Deserialize")&lt;'de>,

[\[src\]](https://docs.rs/serde/1.0.129/src/serde/de/mod.rs.html#603 "goto source code")
  