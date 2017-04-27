package org.keycloak.testsuite.adapter;

import org.keycloak.testsuite.adapter.servlet.AbstractSAMLFilterServletAdapterTest;
import org.keycloak.testsuite.arquillian.annotation.AppServerContainer;

/**
 * Created by zschwarz on 4/20/17.
 */

@AppServerContainer("app-server-was")
public class WASSAMLFilterAdapterTest extends AbstractSAMLFilterServletAdapterTest{
}
