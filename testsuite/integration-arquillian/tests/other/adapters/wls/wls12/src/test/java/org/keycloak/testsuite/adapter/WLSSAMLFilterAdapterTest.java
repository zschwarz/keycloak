package org.keycloak.testsuite.adapter;

import org.keycloak.testsuite.adapter.servlet.AbstractSAMLFilterServletAdapterTest;
import org.keycloak.testsuite.arquillian.annotation.AppServerContainer;

/**
 * Created by zschwarz on 4/27/17.
 */

@AppServerContainer("app-server-wls")
public class WLSSAMLFilterAdapterTest extends AbstractSAMLFilterServletAdapterTest {
}
