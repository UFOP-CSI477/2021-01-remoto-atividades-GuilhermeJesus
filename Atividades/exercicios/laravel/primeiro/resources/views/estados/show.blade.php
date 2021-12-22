@extends('principal')

@section('conteudo')

    <p>Id: {{ $estado->id }}</p>
    <p>Nome: {{ $estado->nome }}</p>
    <p>Sigla: {{ $estado->sigla }}</p>

    <a href="{{route('estados.edit', $estado->id)}}">Editar</a>

    <a href="{{route('estados.index')}}">Voltar</a>

    <form name="frmDelete" action="{{ route('estados.destroy', $estado->id)}}" method="post" 
    onsubmit="return confirm('Confirme a exclusão desse estado?');">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

</form>

@endsection