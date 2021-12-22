@extends('principal')

@section('conteudo')

    @csrf
    @method('PUT')
    
    <form action="{{ route('cidades.update',$cidades->id)}}" method="post">
        @csrf
        <div class="form-group">
            <label for="nome">Nome</label>
            <input type="text" class="form-control" name="nome" id="nome" value='{{$cidade->nome}}'>
        </div>

        <div class="form-group">
            <label for="sigla">Sigla</label>
            <input type="text" class="form-control" name="sigla" id="sigla" value='{{$cidade->sigla}}>'
        </div>

        <div class="text-right">
            <input type="submit" value="Cadastrar" class="btn btn-primary">
            <input type="reset" value="Limpar" class="btn btn-danger">
        </div>

    </form>
@endsection