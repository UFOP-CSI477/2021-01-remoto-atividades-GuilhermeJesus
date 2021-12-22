@extends('principal')

@section('conteudo')

    <p>Id: {{ $cidade->id }}</p>
    <p>Nome: {{ $cidade->nome }}</p>
    <p>Estado: {{ $cidade->estado->nome }}</p>

    <a href="{{route('cidades.edit', $estado->id)}}">Editar</a>

    <a href="{{route('cidades.index')}}">Voltar</a>

    <form name="frmDelete" action="{{ route('cidades.destroy', $cidade->id)}}" method="post" 
    onsubmit="return confirm('Confirme a exclusão dessa cidade?');">

    @csrf
    @method('DELETE')

    <input type="submit" value="Excluir">

</form>

@endsection