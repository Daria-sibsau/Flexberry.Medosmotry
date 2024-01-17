package Medosmotry.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Medosmotry.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ПриказМЗР
 */
@Entity(name = "IISMedosmotryПриказМЗР")
@Table(schema = "public", name = "ПриказМЗР")
public class PrikazMZR {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерПункта")
    private String номерпункта;


    public PrikazMZR() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНомерПункта() {
      return номерпункта;
    }

    public void setНомерПункта(String номерпункта) {
      this.номерпункта = номерпункта;
    }


}