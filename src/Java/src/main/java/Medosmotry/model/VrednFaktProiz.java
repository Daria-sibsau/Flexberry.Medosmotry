package Medosmotry.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Medosmotry.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ВреднФактПроиз
 */
@Entity(name = "IISMedosmotryВреднФактПроиз")
@Table(schema = "public", name = "ВреднФактПроиз")
public class VrednFaktProiz {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "KlassVredFaktor")
    @Convert("KlassVredFaktor")
    @Column(name = "КлассВредФактор", length = 16, unique = true, nullable = false)
    private UUID _klassvredfaktorid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "KlassVredFaktor", insertable = false, updatable = false)
    private KlassVredFaktor klassvredfaktor;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "IndNaprMedosm")
    @Convert("IndNaprMedosm")
    @Column(name = "ИндНапрМедосм", length = 16, unique = true, nullable = false)
    private UUID _indnaprmedosmid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "IndNaprMedosm", insertable = false, updatable = false)
    private IndNaprMedosm indnaprmedosm;


    public VrednFaktProiz() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}