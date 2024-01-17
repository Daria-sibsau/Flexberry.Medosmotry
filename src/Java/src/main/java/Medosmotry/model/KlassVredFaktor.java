package Medosmotry.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Medosmotry.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: КлассВредФактор
 */
@Entity(name = "IISMedosmotryКлассВредФактор")
@Table(schema = "public", name = "КлассВредФактор")
public class KlassVredFaktor {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВредныйФактор")
    private String вредныйфактор;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Podrazdelenie")
    @Convert("Podrazdelenie")
    @Column(name = "Подразделение", length = 16, unique = true, nullable = false)
    private UUID _podrazdelenieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Podrazdelenie", insertable = false, updatable = false)
    private Podrazdelenie podrazdelenie;


    public KlassVredFaktor() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getВредныйФактор() {
      return вредныйфактор;
    }

    public void setВредныйФактор(String вредныйфактор) {
      this.вредныйфактор = вредныйфактор;
    }


}